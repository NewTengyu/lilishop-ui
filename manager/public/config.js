var BASE = {
    /**
     * @description api请求基础路径
     */
    API_DEV: {
<<<<<<< HEAD
      common: "http://192.168.0.102:8888",
      buyer: "http://192.168.0.102:8888",
      seller: "http://192.168.0.102:8888",
      manager: "http://192.168.0.102:8888",
      //  manager: "http://192.168.0.120:8887",
      //  common: "http://192.168.0.120:8890",


=======
      common: "https://common-api.pickmall.cn",
      buyer: "https://buyer-api.pickmall.cn",
      seller: "https://store-api.pickmall.cn",
      manager: "https://admin-api.pickmall.cn"
>>>>>>> 38618819962d2f4ad7da4d3bc213d151943f1744
    },
    API_PROD: {
      common: "http://192.168.0.102:8888",
      buyer: "http://192.168.0.102:8888",
      seller: "http://192.168.0.102:8888",
      manager: "http://192.168.0.102:8888"
    },
    /**
     * @description // 跳转买家端地址 pc端
     */
    PC_URL: "https://pc-b2b2c.pickmall.cn",
    /**
     * @description  // 跳转买家端地址 wap端
     */
    WAP_URL: "https://m-b2b2c.pickmall.cn",
    /**
     *  @description api请求基础路径前缀
     */
    PREFIX: "/manager"
  };
