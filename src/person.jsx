const Person = ({ id, name, age, image }) => {
  return (
    <section key={id}>
      <img src={image} alt='Photo' />
      <h4>{name}</h4>
      <p>{age} Years</p>
    </section>
  );
};

export default Person;
