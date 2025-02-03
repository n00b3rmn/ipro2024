import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 board
  const [isXTurn, setIsXTurn] = useState(true); // Player X starts

  // Check for a winner
  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner ('X' or 'O')
      }
    }

    return null; // No winner
  };

  const handlePress = (index) => {
    if (board[index] || checkWinner(board)) {
      return; // Ignore clicks if the square is occupied or game is over
    }

    const updatedBoard = [...board];
    updatedBoard[index] = isXTurn ? "X" : "O";
    setBoard(updatedBoard);
    setIsXTurn(!isXTurn);

    const winner = checkWinner(updatedBoard);
    if (winner) {
      Alert.alert(`🎉 Player ${winner} Wins!`);
    } else if (!updatedBoard.includes(null)) {
      Alert.alert("It's a draw!");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  const renderSquare = (value, index) => (
    <TouchableOpacity
      key={index}
      style={styles.square}
      onPress={() => handlePress(index)}
    >
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <View style={styles.board}>
        {board.map((value, index) => renderSquare(value, index))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Restart Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  square: {
    width: "33.33%",
    height: "33.33%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  squareText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 8,
  },
  resetText: {
    color: "#fff",
    fontSize: 18,
  },
});
