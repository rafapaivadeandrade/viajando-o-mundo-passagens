const RedesSocial = ({ speaker }) => {

  return (
    <>
      {speaker?.facebook && <a href={speaker?.facebook} target="_blank" rel="noreferrer"><i className="fa fa-facebook fa-lg" /></a>}
      {speaker?.instagram && <a href={speaker?.instagram} target="_blank" rel="noreferrer"><i className="fa fa-instagram fa-lg" /></a>}
    </>
  );
}

export default RedesSocial;