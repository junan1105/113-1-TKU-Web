const { MongoClient } = require('mongodb');

// MongoDB 連接設定
const uri = "mongodb://localhost:27017";
const dbName = "411631053";
const collectionName = "studentslist";

async function importCSVtoMongoDB() {
    const client = new MongoClient(uri);

    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 查詢所有學生資料
        const students = await collection.find().toArray();

        // 顯示結果
        console.log("學生資料列表:");
        students.forEach(student => {
            console.log(student);
        });

    } catch (error) {
        console.error("發生錯誤：", error);
    } finally {
        // 關閉 MongoDB 連線
        await client.close();
        console.log("已斷開與 MongoDB 的連線");
    }
}

// 執行函式
importCSVtoMongoDB();
