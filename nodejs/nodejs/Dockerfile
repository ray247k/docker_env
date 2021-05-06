FROM node:14.15.4-alpine

# 設定工作目錄
WORKDIR /trp_frontend

# 把專案檔案複製到工作目錄下
COPY ./ /trp_frontend

# 安裝 npm 依賴
RUN npm install

# 對外曝露 3000 port
EXPOSE 3000

RUN npm run build

# 設定映像檔內執行的指令
# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "start"]

# 如果執行出錯，試試看把所有註解和空行刪掉再執行
