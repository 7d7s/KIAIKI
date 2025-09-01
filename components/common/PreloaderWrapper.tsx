'use client';

import { useEffect, useState } from 'react';
import PreLoader from '@/app/PreLoder';

const PreloaderWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <PreLoader /> : null;
};

export default PreloaderWrapper;
