# We Hongry

Find food trucks near you.

![We Hongry Gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTAzc2VnZXh3OHpjdXA4bnVkNHYwenBidHZ0dm4yOGFwNmNmcHF6bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/whUGWqc3L8uZveDBx5/giphy.gif)

## Requirements

- Use typescript for client and server
- Use React for the client
- Use Typescript for the server
- Centered "Find Food Trucks" button
- Show up to three per page
- Responsive

## To Do

- [x] SF Food Truck Schedule Service
- [x] Test to determine list of food trucks within certain radius on server
- [x] Find food trucks button
- [x] My location
- [x] Food truck list
- [x] Cards
- [ ] Food trucks map
- [ ] Paging
- [ ] Get more food trucks
- [ ] Test responsiveness
- [x] Document things I skipped, trade-offs, and shortcuts
- [x] Steps to make it production ready
- [x] Most impactful new features to build next

## Scripts

- `build` - Build the server and client
- `test` - Run the server and client tests
- `lint` - Lint the server and client code
- `server:dev` - Start the server in development mode
- `server:lint` - Lint the server code
- `server:start` - Start the server in production mode
- `server:test` - Run the server tests
- `client:dev` - Start the client in development mode
- `client:lint` - Lint the client code
- `client:start` - Start the client in production mode

## Links

**App Endpoints**

- [app.wehongry.xyz](https://app.wehongry.xyz/)
- [api.wehongry.xyz trucks endpoint](https://api.wehongry.xyz/trucks?latitude=37.745156012803449&longitude=-122.403946659673494&radius=1&take=3&skip=0)

**Libraries**

- [Express API Starter with Typescript](https://github.com/w3cj/express-api-starter-ts)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Haversine](https://www.npmjs.com/package/haversine)
- [Tailwind](https://tailwindui.com/)

**READMEs**

- [client](./client/README.md)
- [server](./server/README.md)

**Data Sources**

- [SF Food Truck Data](https://data.sfgov.org/resource/jjew-r69b.json)

## Things I skipped, Trade-offs, and Shortcuts

**Skipped**

- Naming - probably should have taken time to name models, services, etc. better
- Performance - could have done more to optimize performance around distance
- Empty states - could have done more to handle empty states

**Trade-offs**

- Share code between client and server
- Tailwind CSS - I have never actually used it before, so I could have gotten more done if I used something I was more
  familiar with

**Shortcuts**

- Integration tests are probably super brittle

## Steps to Make it Production Ready

1. Needs better design. It should look better.
2.

## Most Impactful New Features to Build Next

1. Directions - I have their positions. I assume the next thing they would want to do is go there, so directions would
   be low hanging fruit.
2. Ratings and Reviews - It'd be nice to know if the food is any good.
3. Food Type Filter - Users might be in the mood for a particular type of food.
4. Food Truck Schedule - It'd be nice to know when they are open.
