const { MessageReaction, User } = require("discord.js");
const ReactionRoleManager = require("../classes/ReactionRoleManager");

/**
 * @function
 * @param {MessageReaction} messageReaction
 * @param {User} user
 * @returns {Promise<void>}
 */
module.exports = async (messageReaction, user) => {
  const manager = new ReactionRoleManager(messageReaction, user);
  if (!(await manager.validateInput())) {
    return;
  }

  manager.handleUserReaction();
  manager.assignRoles();
};