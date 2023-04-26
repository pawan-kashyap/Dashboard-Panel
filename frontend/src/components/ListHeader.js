export const ListHeader = ({ data }) => {
  return (
    <thead>
      <tr>
        <th>#</th>
        {data.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};
