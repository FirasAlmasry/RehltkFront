import { GoogleSpreadsheet } from "google-spreadsheet";

export async function addOrder(data) {
    try {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();

        const sheet = doc.sheetsByTitle["orders"];

        const formatedData = {
            "رقم الجوال": data.phone,
            المدينة: data.city,
            الدولة: data.country,
            "حاجز طيران": data.bookingFlight,
            التاريخ: data.date,
            الوقت: data.time,
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        return false;
    }
}

export async function addCoumpanyOrder(data) {
    try {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["companiesOrders"];
        const formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.personName,
            "اسم الشركة": data.coumpanyName,
            "البريد الالكتروني": data.email,
            المدينة: data.city,
            الوصف: data.desc,
            التاريخ: data.date,
            الوقت: data.time,
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        return false;
    }
}

export async function addComplaint(data) {
    try {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["complaint"];
        const formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.name,
            الوصف: data.desc,
            التاريخ: data.date,
            الوقت: data.time,
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        return false;
    }
}
export async function addEmployee(data) {
    try {
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["employee"];
        const formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.name,
            العمر: data.age,
            المدينة: data.city,
            "لدية خبرة": data.hasExpr,
            التاريخ: data.date,
            الوقت: data.time,
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        return false;
    }
}

export async function addSales(data) {
    try {
        const doc = new GoogleSpreadsheet(
            "1KijO5AaYQlIQwLMz87BEA-B9MhQh5pSYY2_i3asGvuk"
        );

        await doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["sales"];
        const formatedData = {
            "اسم العميل": data.name,
            "رقم الجوال": data.phone,
            الدولة: data.country,
            "سعر تكلفة الباكدج بدون الطيران": data.packageWithoutFlightCost,
            "تكلفة الطيران": data.flightCost,
            "سعر بيع الباكدج": data.PackagePrice,
            المدينة: data.city,
            التاريخ: data.date,
            الوقت: data.time,
            الموظف: data.employee,
            "اسم الوكيل": data.agent,
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        return false;
    }
}
