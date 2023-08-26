const SingleNews = ({ params, searchParams }) => {
  const { id } = params;
  console.log(searchParams);
  return (
    <div>
      <h1>This is single news {id}</h1>
    </div>
  );
};

export default SingleNews;
