function TodoItem({ userId, title, completed }) {
  const cardStyle = {
    border: "1px solid #000",
    padding: "8px",
    marginBottom: "8px",
  };

  return (
    <div style={cardStyle}>
      <p>
        <b>User:</b> {userId}
      </p>
      <p>
        <b>Task:</b> {title}
      </p>
      <p>
        <b>Result:</b> {completed ? "Done" : "Pending"}
      </p>
    </div>
  );
}

export default TodoItem;




