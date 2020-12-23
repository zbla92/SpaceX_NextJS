export const IsJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const cleanText = (content) => content.replace(/<\/?[^>]+(>|$)/g, '');

export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const weekDaysFull = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
export const monthsFull = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (
  nonformatDate,
  fullDays = true,
  fullMonths = true,
  showYear = false
) => {
  const newDate = new Date(nonformatDate);
  /* if (fullDays) {
		return `${weekDaysFull[newDate.getDay()]}, ${months[newDate.getMonth()]} ${newDate.getDate()}`;
	} */
  return `${
    !fullDays ? weekDays[newDate.getDay()] : weekDaysFull[newDate.getDay()]
  }, ${
    !fullMonths ? months[newDate.getMonth()] : monthsFull[newDate.getMonth()]
  } ${newDate.getDate()}${showYear ? `, ${newDate.getFullYear()}` : ''}`;
};

// eslint-disable-next-line no-restricted-globals
export const isValidDate = (date) =>
  date instanceof Date && !isNaN(date.valueOf());

// 3 DEC
export const formatDayMonth = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${months[newDate.getMonth()]}`;
};

export const formatDayDate = (date) => {
  const newDate = new Date(date);
  return `${weekDays[newDate.getDay()]} ${newDate.getDate()}`;
};

export const formatMonthDate = (date, fullMonths = false) => {
  const newDate = new Date(date);
  return `${
    !fullMonths ? months[newDate.getMonth()] : monthsFull[newDate.getMonth()]
  } ${newDate.getDate()}`;
};

export const formatDateNumber = (day) => (day < 10 ? `0${day}` : day);

export const formatTime = (seconds) => {
  const mins = `0${Math.floor((seconds % 5400) / 60)}`.slice(-2);
  const sec = `0${Math.floor(seconds % 60)}`.slice(-2);
  return `${mins}:${sec}`;
};

export const formatShortDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1; // months are shown from 0 - 11 so we need to add plus one
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export const timeSince = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years ago`;
  }
  if (interval === 1) {
    return `${interval} year ago`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} months ago`;
  }
  if (interval === 1) {
    return `${interval} month ago`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} days ago`;
  }
  if (interval === 1) {
    return `${interval} day ago`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours ago`;
  }
  if (interval === 1) {
    return `${interval} hour ago`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} min ago`;
  }
  return `few seconds ago`;
};

export const formatHours = (day) => {
  const hDate = new Date(day);
  let hours = hDate.getHours();
  let minutes = hDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${ampm}`;
};

export const isSafari = () =>
  /constructor/i.test(window.HTMLElement) ||
  ((p) => {
    return p.toString() === '[object SafariRemoteNotification]';
  })(
    !window.safari ||
      (typeof safari !== 'undefined' && window.safari.pushNotification)
  );

export const isFirefox = () =>
  navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

export const getOS = () => {
  const { userAgent } = window.navigator;
  const { platform } = window.navigator;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'mac-os';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'ios';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (/Android/.test(userAgent)) {
    os = 'android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }

  return os;
};

export const calculateStartsIn = (dateParam) => {
  const now = new Date();
  const date = new Date(dateParam);
  let totalSeconds = (date - now) / 1000;

  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  if (totalSeconds && totalSeconds > 0) {
    return { hours, minutes, seconds };
  }
  return { hours: '00', minutes: '00', seconds: '00' };
};

export const clamp = (num, min, max) => {
  // eslint-disable-next-line no-nested-ternary
  return num <= min ? min : num >= max ? max : num;
};

export const superAddressStringGenerator = (addressObject) => {
  if (addressObject) {
    const {
      first_name,
      last_name,
      street,
      postal_code,
      city,
      state,
      country,
    } = addressObject;
    return `${first_name && first_name} ${last_name && last_name}, ${
      street && street
    }, ${postal_code && postal_code} ${city && city}, ${state && state}, ${
      country && country.name
    }`;
  }
  return 'No address was found.';
};

export const formatStreetAddress = ({ streetNumber, street }) => {
  let formattedAddress = '';
  if (streetNumber) {
    formattedAddress = `${streetNumber} `;
  }

  if (street) {
    formattedAddress = `${formattedAddress}${street}`;
  }

  return formattedAddress;
};

export const getDateInDaysFromNow = (numOfDays) => {
  const date = new Date();
  date.setDate(date.getDate() + numOfDays);

  return date;
};

export const getFormattedDateInDaysFromNow = (numOfDays) => {
  return formatDate(getDateInDaysFromNow(numOfDays));
};

export const searchParamsToObject = (params) => {
  const pairs = params.substring(1).split('&');
  const obj = {};

  pairs.map((pair) => {
    const splitIt = pair.split('=');
    obj[decodeURIComponent(splitIt[0])] = decodeURIComponent(splitIt[1]);
    return null;
  });

  return obj;
};

export const getURLWithQueryParams = (base, params) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  return `${base}?${query}`;
};

export const envParserRegex = /(http[s]?:\/\/)?((qa[0-9])-?)?(([^-]*)-?)?((([^.]*)+.vivant.eco)|localhost)/gi;

export const EMAIL_PATTERN = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const getExperienceSlug = () => {
  if (process.browser) {
    const path = window.location.pathname.split('/');
    return path[path.length - 1];
  }
  return null;
};

export const formatPrice = (price = 1, currency = '$') => {
  let number = parseFloat(price).toFixed(2).toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(number)) number = number.replace(pattern, '$1,$2');

  return `${currency}${number}`;
};

export const checkUsersMembership = (getUserData) => {
  if (
    ['active', 'pending_cancellation'].includes(
      getUserData?.data?.subscription?.status
    ) ||
    getUserData?.status === STATUS.PENDING
  )
    return true;
  return false;
};

export const checkEligibilityForPass = (getUserData, session) => {
  const eligablePasses = getUserData?.data?.experience_passes?.filter(
    (pass) =>
      pass.experience.id === session?.experience_id &&
      !pass.is_used &&
      !pass.shared_with
  );
  if (eligablePasses?.length > 0) return true;
  return false;
};

export const checkEligibilityForPassChangeOrCancel = (getUserData, session) => {
  const eligablePasses = getUserData?.data?.experience_passes?.filter(
    (pass) => {
      return (
        pass.experience.id === session?.experience_id &&
        pass.reservation?.id === session.reservation_id &&
        pass.status === 'available'
      );
    }
  );

  if (eligablePasses?.length > 0) return true;
  return false;
};

export const checkIfUserIsAdmin = (user) => {
  if (user?.roles.length > 0) {
    return user.roles.some((item) => item.toLowerCase() === 'administrator');
  }
  return false;
};

export const getPartOfDay = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  if (hour < 5 || hour >= 18) return 'evening';

  return '';
};

export const clearURLParams = () => {
  const { pathname, origin } = window.location;
  window.history.pushState('data', 'title', `${origin}${pathname}`);
};
