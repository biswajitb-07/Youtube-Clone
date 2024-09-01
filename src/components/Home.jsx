import React from 'react';
import { Sidebar } from "./Sidebar.jsx";
import { Video } from "./Video.jsx";
import { useAuth } from "../context/AuthProvider.jsx";
import { ListItem } from './ListItem.jsx';

export const Home = () => {
  const { data, loading } = useAuth();

  return (
    <div className='flex mt-10'>
      <Sidebar />
      <div className='h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
        <ListItem/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-5'>
          {
            !loading && data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.video.videoId} video={item?.video} />;
            })
          }
        </div>
      </div>
    </div>
  );
};