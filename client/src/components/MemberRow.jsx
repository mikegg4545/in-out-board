function MemberRow({ member, onToggleStatus }) {
  return (
    <div className="board-row" onClick={() => onToggleStatus(member.id)}>
      <div className="member-cell">
        <strong>{member.name}</strong>
        <span>{member.rank}</span>
      </div>

      <div className="status-cell">
        {member.status === "in" && (
          <div className="status-card in-card">{member.details}</div>
        )}
      </div>

      <div className="status-cell">
        {member.status === "out" && (
          <div className="status-card out-card">{member.details}</div>
        )}
      </div>
    </div>
  );
}

export default MemberRow;
