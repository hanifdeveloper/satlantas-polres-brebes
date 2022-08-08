import contact from '../../../constants/data/contact.json';

export default function HomeContact() {
  return (
    <div className="row justify-content-center">
      {
        contact.map((i, key) => (
          <div key={key} className="col-md-4 py-2">
            <div className="d-flex flex-row d-inline-flex">
              <div className="col-sm-3 row justify-content-center">
                <img className="img-upload" src={i.image} alt="console" />
              </div>
              <div className="col-sm-9 d-flex flex-column justify-content-center px-2">
                <p className="text-sm fw-bold p-0 my-1">{i.title}</p>
                <p className="text-sm color-palette-5 p-0 m-0">{i.value}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
