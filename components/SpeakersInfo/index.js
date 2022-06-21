import React from 'react';
import RedesSocial from '../RedesSocial';

const SpeakersInfo = ({ speaker }) => (
  <>
    <div className="col-lg-3 col-md-6 ">
      {/* team member */}
      <div className="de-team-list">
        <div className="team-pic">
          <img src={speaker?.avatar} className="img-responsive" alt="" />
        </div>
        <div className="team-desc scroll-behavior">
          <h3>{speaker?.name}</h3>
          <p className="lead">{speaker?.profission}</p>
          <div className="small-border" />
          <p>{speaker?.crm}</p>
          <p dangerouslySetInnerHTML={{ __html: speaker?.description?.pt }} />

          {/* <div className="social">
            <RedesSocial speaker={speaker} />
          </div> */}
        </div>
      </div>
      {/* team close */}
    </div>
  </>
);

export default SpeakersInfo;
