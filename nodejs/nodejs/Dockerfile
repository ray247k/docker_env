FROM node:12-alpine

# 工作目錄，程式被 volume 到容器的目標位置
WORKDIR /usr/src/app

# 安裝 npm 依賴
RUN npm install

# 曝露出 3000 port
EXPOSE 3000

# 設定映像檔內執行的指令
# CMD ["npm", "run", "dev"]
CMD ["npm", "start"]