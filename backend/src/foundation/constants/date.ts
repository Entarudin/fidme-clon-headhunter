import * as moment from 'moment';

export const formatDate = moment.utc().local().format('YYYY-MM-DD HH:mm:ss');
