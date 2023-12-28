import { useState } from "react";

export function Lobby() {
  const [playerName, setPlayerName] = useState("");

  return (
    <div>
      this is the lobby
      <label htmlFor="player-name">
        Player name:
        <input
          id="player-name"
          value={playerName}
          onChange={({ target }) => {
            setPlayerName(target.value);
          }}
        />
      </label>

      <button>
        Join and shuffle
      </button>
    </div>
  );
}
