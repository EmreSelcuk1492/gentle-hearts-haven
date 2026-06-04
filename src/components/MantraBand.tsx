const words = ["Move", "Breathe", "Release", "Heal"];

const MantraBandV2 = () => (
  <div className="mantra-band-v2" aria-label="Brand mantra: Move, Breathe, Release, Heal">
    <div className="mantra-static">
      {words.map((word, i) => (
        <span key={word} className="mantra-static-row">
          <span className="mantra-static-word">{word}</span>
          {i < words.length - 1 && <span className="mantra-static-sep" aria-hidden="true">·</span>}
        </span>
      ))}
    </div>
  </div>
);

export default MantraBandV2;
