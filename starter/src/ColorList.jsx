import Color from "./Color";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <Color key={index} index={index} color={color} />;
      })}
    </section>
  );
};

export default ColorList;
