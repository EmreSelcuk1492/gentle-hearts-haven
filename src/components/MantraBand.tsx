const words = ["Move", "Breathe", "Release", "Heal"];

const MantraBand = () => (
  <div className="mantra-band" aria-label="Brand mantra: Move, Breathe, Release, Heal">
    <div className="mantra-track">
      {[0, 1, 2, 3].map((set) =>
        words.map((word, i) => (
          <span key={`${set}-${i}`} style={{ display: "contents" }}>
            <span className="mantra-word">{word}</span>
            <span className="mantra-dot" aria-hidden="true" />
          </span>
        ))
      )}
    </div>
  </div>
);

export default MantraBand;
