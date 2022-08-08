import Image from 'next/image';
import information from '../../../constants/data/information.json';

export default function HomeInformation() {
  return (
    <div className="row justify-content-center">
      {
        information.map((i, key) => (
          <div key={key} className="col-sm-4 d-flex">
            <div className="card border-0 shadow my-3">
              <div className="card-body text-center">
                <Image src={i.image} width={72} height={72} alt="console" layout="intrinsic" />
                <h5 className="mt-2">{i.title}</h5>
                <p className="text-sm color-palette-5">
                  {i.description}
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
