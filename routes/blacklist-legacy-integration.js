'use strict';

const _ = require('../lib/translate')._;
const clientHelpers = require('../lib/client-helpers');

const router = require('../lib/router-async').create();

clientHelpers.registerRootRoute(router, 'blacklist', _('Blacklist'));

module.exports = router;