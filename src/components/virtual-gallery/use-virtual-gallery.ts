import imagesOne from '../../static/photos/1.jpg';
import imagesTwo from '../../static/photos/2.jpg';
import imagesThree from '../../static/photos/3.jpg';
import imagesFour from '../../static/photos/4.jpg';
import imagesFive from '../../static/photos/5.jpg';
import video from '../../static/media/video_optimized.mp4';

export const UseVirtualGallery = () => {
  interface MockDataItem {
    idx: number;
    title?: string | null;
    subtitle?: string | null;
    img?: string | null;
    video?: string | null;
    positionImg?: boolean;
    positionText?: boolean;
  }

  const mockData: MockDataItem[] = [
    {
      idx: 1,
      title: 'Beautiful world',
      subtitle: null,
      img: null,
      video: null,
      positionText: false,
    },
    {
      idx: 2,
      title: null,
      subtitle: null,
      img: imagesOne,
      video: null,
      positionImg: true,
      positionText: false,
    },
    {
      idx: 3,
      title: 'Aliquam aspernatur corporis explicabo magnam minus',
      subtitle: null,
      img: null,
      video: null,
      positionText: true,
    },
    {
      idx: 4,
      title: null,
      subtitle: null,
      img: imagesTwo,
      video: null,
      positionImg: false,
      positionText: false,
    },
    {
      idx: 5,
      title: 'Lorem magnam minus',
      subtitle: null,
      img: null,
      video: null,
      positionText: true,
    },
    {
      idx: 6,
      title: null,
      subtitle: null,
      img: imagesThree,
      video: null,
      positionImg: true,
      positionText: true,
    },
    {
      idx: 7,
      title: 'Lorem',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur blanditiis deserunt eosest eum hic impedit ipsam ipsum, magni maxime placeat, quasi reiciendis, repellat sequi ullam unde   veniam voluptate!',
      img: null,
      video: null,
      positionImg: false,
      positionText: true,
    },
    {
      idx: 8,
      title: null,
      subtitle: null,
      img: imagesFour,
      video: null,
      positionImg: true,
      positionText: false,
    },
    {
      idx: 9,
      title: null,
      subtitle: null,
      img: imagesFive,
      video: null,
      positionImg: false,
      positionText: false,
    },
    {
      idx: 9,
      title: null,
      subtitle: null,
      img: null,
      video: video,
      positionImg: true,
      positionText: false,
    },
  ];

  return { mockData };
};
