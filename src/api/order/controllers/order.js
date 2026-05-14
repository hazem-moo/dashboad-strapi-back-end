// // @ts-nocheck
// "use strict";

// /**
//  * order controller
//  */

// const { createCoreController } = require("@strapi/strapi").factories;

// // module.exports = createCoreController('api::order.order');

// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//   // delete
//   async delete(ctx) {
//     const { id } = ctx.params;
//     const entity = await strapi.entityService.delete("api::order.order", id);
//     return this.transformResponse(entity);
//   },

//   async deleteAll(ctx) {
//     const orders = await strapi.entityService.findMany("api::order.order");
//     await Promise.all(
//       orders.map((o) => strapi.entityService.delete("api::order.order", o.id)),
//     );
//     ctx.body = { message: "All orders deleted" };
//   },

// }));

// @ts-nocheck
"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // UPDATE
  async update(ctx) {
    try {
      const { id } = ctx.params;

      const body = ctx.request.body;

      const entity = await strapi.entityService.update(
        "api::order.order",
        id,
        body,
      );

      return entity;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // DELETE
  async delete(ctx) {
    try {
      const { id } = ctx.params;

      const entity = await strapi.entityService.delete("api::order.order", id);

      return entity;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));
