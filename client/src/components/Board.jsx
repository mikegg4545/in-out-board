import MemberRow from "./MemberRow";

function Board({ members }) {
  return (
    <section className="board">
      <div className="board-header">Members</div>
      <div className="board-header in-header">In</div>
      <div className="board-header out-header">Out</div>

      {members.map((member) => (
        <MemberRow key={member.id} member={member} />
      ))}
    </section>
  );
}

export default Board;
