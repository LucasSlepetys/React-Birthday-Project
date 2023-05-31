const Person = ({ key, name, age, img }) => {
  return (
    <section key={key}>
      <img src={img} alt='Photo' />
      <h4>{name}</h4>
      <p>{age} Years</p>
    </section>
  );
};

export default Person;
