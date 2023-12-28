import { useCallback, useEffect, useState } from "react";
import { useAppCards } from "../providers/useAppProvider";

export function Test1() {
  const { data, updateState } = useAppCards();
  const [id, setId] = useState("");
  const [radio, setRadio] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onClick = useCallback(() => {
    updateState([id], {
      inDeck: radio === "1",
      inHand: radio === "2",
      inPot: radio === "3",
    });
  }, [id, radio, updateState]);

  return (
    <div>
      hello there
      <br />
      <label htmlFor="uuid">
        id to update
        <input
          id="uuid"
          value={id}
          onChange={({ target }) => setId(target.value)}
        />
      </label>
      <br />
      <label htmlFor="in-deck">
        in deck
        <input
          id="in-deck"
          type="checkbox"
          value="1"
          name="status-game"
          checked={"1" === radio}
          onChange={({ target }) => setRadio(target.value)}
        />
      </label>
      <br />
      <label htmlFor="in-hand">
        in hand
        <input
          id="in-hand"
          type="checkbox"
          value="2"
          name="status-game"
          checked={"2" === radio}
          onChange={({ target }) => setRadio(target.value)}
        />
      </label>
      <br />
      <label htmlFor="in-pot">
        in pot
        <input
          id="in-pot"
          type="checkbox"
          value="3"
          name="status-game"
          checked={"3" === radio}
          onChange={({ target }) => setRadio(target.value)}
        />
      </label>
      <br />
      <button onClick={onClick}>click</button>
    </div>
  );
}
