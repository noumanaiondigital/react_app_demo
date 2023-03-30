import React from "react";
const TrackCard = ({ title, text, imgPath }) => {
  return (
    <>
      <div className="tw--w-full tw--my-4 tw--bg-white tw--shadow-md tw--border-[1px] tw--rounded-md tw--p-3">
        <div className="tw--text-xl tw--font-semibold tw--text-white tw--w-fit tw--rounded-md tw--bg-primaryColor tw--mb-3 tw--p-3">
          {title}
        </div>
        <div className="tw--flex lg:tw--flex-row tw--flex-col-reverse tw--items-center ">
          <div className="tw--w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nam
            porro suscipit voluptas repudiandae modi ut quibusdam ab alias
            cupiditate dolore veniam quam ex vero odio nemo fugiat possimus
            debitis expedita, ea eaque. Expedita quo nam dicta incidunt.
            Aspernatur suscipit nostrum repellendus tempora iure et sapiente
            minus odio vero facilis. Eius, rerum est! Accusamus voluptatibus
            doloremque perspiciatis nulla modi! Veniam delectus quo labore
            debitis consequuntur fugiat accusantium voluptas illo cum vel
            perspiciatis, veritatis sapiente esse aspernatur, dicta qui! Sequi
            quia iste quos debitis neque amet nihil, ea, ipsa, perspiciatis
            necessitatibus culpa sit voluptas ipsam modi sunt vitae. Aut veniam
            culpa quia, magnam voluptate a numquam rerum beatae odit aliquid at
          </div>
          <div className="tw--min-w-[300px] tw--min-h-[300px] tw--my-3 tw--max-w-[300px] tw--max-h-[300px] tw--ml-6 tw--overflow-hidden tw--rounded-full">
            <img
              src={imgPath}
              alt=""
              className="tw--min-w-[300px] tw--min-h-[300px] hover:tw--scale-105 tw--transition-all tw--ease-in-out tw--duration-300 tw--shadow-md tw--object-cover tw--rounded-full tw--object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};
function ConferenceTracks() {
  return (
    <div className="tw--p-2 tw--mt-3">
      <div className="tw--px-4">
        <span className="tw--text-lg tw--mb-4 tw--inline-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          corrupti id laboriosam excepturi ex, dicta sed hic enim vitae
          temporibus quidem, eligendi, labore doloremque. Est, quis! Ipsa
          officiis soluta cupiditate dicta recusandae ipsam. Possimus, porro
          nihil. Sequi perspiciatis libero quam eum vitae alias. Fugit esse illo
          culpa voluptas, odio et debitis quas quia deleniti accusantium
          cupiditate quaerat placeat quis reiciendis ut natus dicta, pariatur
          aliquid cum voluptates adipisci! Enim, ea ipsum tempore officiis quasi
          velit aspernatur. Maiores perspiciatis recusandae sapiente aliquid
          sint, illum quisquam libero in minima debitis consequatur sit beatae
          doloribus corrupti numquam ipsam eaque incidunt aperiam nemo
          exercitationem.
        </span>
        <TrackCard title={"Event Track 1"} imgPath={"/assets/images/1.jpg"} />
        <TrackCard title={"Event Track 2"} imgPath={"/assets/images/2.jpg"} />
        <TrackCard title={"Event Track 3"} imgPath={"/assets/images/3.jpg"} />
      </div>
    </div>
  );
}

export default ConferenceTracks;
