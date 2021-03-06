/**
 * Created by Greg on 2/27/2017.
 */
"use strict";
const enum_1 = require("./enum");
/**
 * @property connect
 * @property serverError
 * @property joinServer
 * @property disconnect
 * @property reconnect
 * @property roomCreated
 * @property joinedRoom
 * @property leftRoom
 * @property userDetailsUpdate
 * @property requestUserDetails
 * @property syncNetworkEntity
 * @property serverPing
 * @property serverPong
 * @property clientPing
 * @property clientPong
 * @property requestRooms
 */
exports.IOEvent = enum_1.Enum([
    'connect',
    'joinServer',
    'disconnect',
    'reconnect',
    'serverError',
    'roomCreated',
    'joinedRoom',
    'leftRoom',
    'userDetailsUpdate',
    'requestUserDetails',
    'syncNetworkEntity',
    'serverPing',
    'serverPong',
    'clientPing',
    'clientPong',
    'requestRooms',
]);
/**
 * @property requestMatch
 * @property requestJoin
 * @property matchListUpdate
 * @property matchCreated
 * @property joinedMatch
 * @property requestStart
 * @property requestLeave
 * @property matchStarted
 * @property requestEnd
 * @property matchEnded
 * @property setSong
 * @property uploadLevel
 */
exports.MatchEvent = enum_1.Enum([
    'requestMatch',
    'requestJoin',
    'matchListUpdate',
    'matchCreated',
    'joinedMatch',
    'requestStart',
    'requestLeave',
    'matchStarted',
    'requestEnd',
    'matchEnded',
    'setSong',
    'uploadLevel',
]);
/**
 * @property playStarted
 * @property command
 * @property pause
 * @property resume
 * @property playEnded
 */
exports.GameEvent = enum_1.Enum([
    'clientLoaded',
    'clientsReady',
    'playStarted',
    'command',
    'pause',
    'resume',
    'playEnded',
]);
//# sourceMappingURL=event-types.js.map