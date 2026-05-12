export default {
  routes: [
    {
      method: "DELETE",
      path: "/orders/delete-all",
      handler: "order.deleteAll",
    },
  ],
};
