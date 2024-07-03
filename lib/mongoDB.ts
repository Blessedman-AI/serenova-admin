import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || '', {
      dbName: 'Serenova_Admin',
    });

    isConnected = true;
    console.log('MongoDB is connected');
  } catch (err) {
    console.error(err);
  }
};

// import mongoose from 'mongoose';

// let isConnected: boolean = false;

// export const connectToDB = async (): Promise<void> => {
//   mongoose.set('strictQuery', true);

//   if (isConnected) {
//     console.log('MongoDB is already connected');
//     return;
//   }

//   const mongoDBUrl = process.env.MONGODB_URL;

//   if (!mongoDBUrl) {
//     console.error(
//       'MongoDB connection string is not defined in the environment variables'
//     );
//     return;
//   }

//   try {
//     await mongoose.connect(mongoDBUrl, {
//       dbName: 'Serenova_Admin',
//     });

//     isConnected = true;
//     console.log('MongoDB is connected');
//   } catch (err) {
//     console.error('Failed to connect to MongoDB', err);
//   }
// };
