import React from 'react'
import { Link } from 'react-router-dom';
import { Time } from '../loader/Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';

export const Video = (video) => {

  return (
    <div key={video.id} className="">
      <Link to={`/video/${video.video?.videoId}`}>
        {/* thumbnail and duration */}
        <div className='flex flex-col'>
          <div className="relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img className='h-full w-full object-cover' src={video.video?.thumbnails[0]?.url} alt="" />
            {video.video?.lengthSeconds && <Time time={video.video?.lengthSeconds} />}
          </div>
          {/*logo and title  */}
          <div className='flex mt-3 space-x-2'>
            <div className='flex items-start'>
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img className="h-full w-full object-cover" src={video.video?.author?.avatar[0].url} alt="" />
              </div>
              <div>
                <span className='text-sm font-bold line-clamp-2'>{video.video?.title}</span>

                <span className='flex items-center font-semibold mt-2 text-[12px] text-gray-600'>{video.video?.author?.title} {video.video?.author?.badges[0]?.type === "VERIFIED CHANNEL"} <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]'/></span>

                <div className='flex text-gray-500 text[12px]'>
                  <span>{`${abbreviateNumber(
                    video.video?.stats?.views,2
                  )}views`}</span>
                  <span className='flex tex-[24px] leading-none font-bold relative top[-10px] mx-1'>.</span>
                  <span>{video.video?.publishedTimeText}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};