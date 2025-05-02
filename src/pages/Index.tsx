
import React from 'react';
import Header from '@/components/Header';
import VideoPlayer from '@/components/VideoPlayer';
import Comments from '@/components/Comments';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container px-4 py-10 mx-auto">
          <VideoPlayer />
          <Comments />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
