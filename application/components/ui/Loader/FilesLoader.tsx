import React, { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const FilesLoader: FC<SkeletonProps> = (props) => {
  return <Skeleton {...props} />
}

export default FilesLoader