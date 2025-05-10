interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

interface ResourceEntry extends PerformanceEntry {
  transferSize: number;
  initiatorType: string;
}

export const measurePerformance = (): void => {
  if ('PerformanceObserver' in window) {
    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const fcp = entries[entries.length - 1];
      console.log('FCP:', fcp.startTime);
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcp = entries[entries.length - 1];
      console.log('LCP:', lcp.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as FirstInputEntry;
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      let cls = 0;
      entryList.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
      console.log('CLS:', cls);
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

export const measureResourceTiming = (): void => {
  if ('PerformanceObserver' in window) {
    new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry) => {
        const resourceEntry = entry as ResourceEntry;
        console.log('Resource:', {
          name: resourceEntry.name,
          duration: resourceEntry.duration,
          transferSize: resourceEntry.transferSize,
          initiatorType: resourceEntry.initiatorType,
        });
      });
    }).observe({ entryTypes: ['resource'] });
  }
};

export const measureLongTasks = (): void => {
  if ('PerformanceObserver' in window) {
    new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry) => {
        console.log('Long Task:', {
          duration: entry.duration,
          startTime: entry.startTime,
        });
      });
    }).observe({ entryTypes: ['longtask'] });
  }
};

export const initPerformanceMonitoring = (): void => {
  measurePerformance();
  measureResourceTiming();
  measureLongTasks();
}; 