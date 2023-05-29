import dotenv from "dotenv";
dotenv.config()
import { GoogleSpreadsheet } from "google-spreadsheet";
function getCurrentData() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "/" + mm + "/" + yyyy;
}

export async function addOrder(data) {
    try {
        const doc = new GoogleSpreadsheet("1AWw3dJZrekEbm1eKBPvzeQ5MOEcYW9KY0QxyQYYBDQE");

        await doc.useServiceAccountAuth({
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n",
        });
        await doc.loadInfo();

        const sheet = doc.sheetsByTitle["orders"];

        const formatedData = {
            "رقم الجوال": data.phone,
            المدينة: data.address,
            الدولة: data.country,
            "حاجز طيران": data.bookingFlight,
            التاريخ: getCurrentData(),
            الوقت: new Date().toLocaleTimeString(),
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function addCoumpanyOrder(data) {
    try {
        const doc = new GoogleSpreadsheet("1AWw3dJZrekEbm1eKBPvzeQ5MOEcYW9KY0QxyQYYBDQE");

        await doc.useServiceAccountAuth({
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n",
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["companiesOrders"];
        const formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.name,
            "اسم الشركة": data.companyName,
            "البريد الالكتروني": data.email,
            المدينة: data.address,
            الوصف: data.description,
            التاريخ: getCurrentData(),
            الوقت: new Date().toLocaleTimeString(),
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function addComplaint(data) {
    try {
        const doc = new GoogleSpreadsheet("1AWw3dJZrekEbm1eKBPvzeQ5MOEcYW9KY0QxyQYYBDQE");

        await doc.useServiceAccountAuth({
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n",
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["complaint"];
        const formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.name,
            الوصف: data.description,
            التاريخ: getCurrentData(),
            الوقت: new Date().toLocaleTimeString(),
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export async function addEmployee(data) {
    try {
        const doc = new GoogleSpreadsheet("1AWw3dJZrekEbm1eKBPvzeQ5MOEcYW9KY0QxyQYYBDQE");

        await doc.useServiceAccountAuth({
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n",
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["employee"];
        const formatedData = {
            "رقم الجوال": data.phone,
            "اسم العميل": data.name,
            العمر: data.age,
            المدينة: data.city,
            "لدية خبرة": data.hasExpr,
            التاريخ: getCurrentData(),
            الوقت: new Date().toLocaleTimeString(),
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function addSales(data) {
    try {
        const doc = new GoogleSpreadsheet(
            "1KijO5AaYQlIQwLMz87BEA-B9MhQh5pSYY2_i3asGvuk"
        );

        await doc.useServiceAccountAuth({
            client_email: "reheltk@reheltk.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCa1n3HUQ5rW7sP\nzfeNHJQ0PV69KabkYLMcSvZn5P45CD5FdCd+szh7kLFR6K8c/9+Vw0HCThYouukR\nng08kxR8kG6ZRqBZyZJSzTkjaA4T5vf4w6lDDMJjcVPF377y1mWNqSP3v8A4jLG7\n15xLPPCzDy02rSzlb/wldE8RSKeSMInNhVjD0swQyK/WlN+27wnBJDKzn46Wj0Ui\neY98c6XkL5kzUXYlTN7PLfF8kmt7II2XDNnRo8lGiCepxxwpG2qkqeBl9tdQOyfm\n+bUZelEi3IwWO7hHV7GgpOftjBiQHjuQKYe9KDbHju/9kaKDVgJMdP7pDujninWi\nh4P7Suk3AgMBAAECggEABc388YT6R4X7y/Cwzk0zyK5XOShJeCQ956RH8V9ig13W\nKy2zYrmK6Gr5CPUF95Mnog8/XFrsrEeHsTPO/5xPLWuFfjmaoRWKUwZqxl/CTTG0\nRFzAg+G06xwlUpI3CIzV57dLrO7Um9ZqvfIiRjJqiyoUODDx4qoSp7YvuHyn1Riy\npCi61Rumd4avCEsw9ejTiEK9yz3Zta8gZC+rUhYEOfKT22KVEcGwCSqgMYqrMWkE\nvv9LJOZ1OZ2z94o1IHXPDJPd8lOonV3gJCTZDsXRqCYfOVW/wxSazkbcCPigJqVk\n3guUwHtnj+D/GSuqiqytgVvebUBIaE/zY3sDR1tVJQKBgQDPeL5juEQCzq48Balg\nxaC5mjy+FqbNeOMtX9el5MFk3BxPqL0PVh/BgXamsAuKun68y/WJvW212B6zklfs\nu8eoKWbSjjbSWVxOH2xK1ow2A2Owz7NdrdhhoA/t2ixb80A2+HgQjsEAfUOYt99S\nm5/w3iE8kkomN1W/Bh6bc69xswKBgQC/DhKqS/QLusOHrQ2GmDc0FfrLXfEHYI09\nFyA8Dc32QP/Vttd5H+oFbfrtNmvg5Hxic3kpwRyL7nIKhMhstaBnVDeCfbyovD6j\nlDl4rh8gPnQkDr73kfHkmXtZFLY4Nc7HnJBU/nr08fgfN4a3M3Oaje2SffPv7IbV\n7/ZG0UqAbQKBgQCIP9RQqq9HZLH5ywIMAl1l5kujzj5my8/teXamhI8ZDJAvJDJc\nwwOB0eK43v4FcipPFGbAuT02YaLv7Nh/KGabIe1bs3d/Np4u0+YLU9CqnBk5AX3a\ntJNYsYQkgNYG4L24G/7FaOqIxrrArWgk2Pz1cvtCyxOU+1v9YihxkEyUjwKBgCpH\ni/vhuQ0LdI/GzRJ3Buhg4NI2ZMt0I21ce8aua2DOe48o2kA0vs4ay4fJHlBzX89N\nrId/87hHuTb4sX3VJ70WFv6qoqBYoCgE+j7pkXvKNltwY/RXeMdU68YH3ldMGQl1\nbT9R3ZXtIjKOUCKkoTWXqPZdJyl2F1SquL5tPGZ1AoGBAICcrpxh2HwLQnI3O7fD\nX3qiQ62baafMvIcdGsOArGaaAttFrGNevVtTaAg+YdWAChY01CMhPc2wbUAsQy/e\nOH1GKVABrzxSgWsRJtNsDl6rjr43JvGgj4HhCO6bssYUlNy56UC+l8aDc7AAOVek\nEb9vPVvJAxnk5DwzJdhsxu6B\n-----END PRIVATE KEY-----\n",
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle["sales"];
        const formatedData = {
            "اسم العميل": data.name,
            "رقم الجوال": data.phone,
            الدولة: data.country,
            "سعر تكلفة الباكدج بدون الطيران": data.packageWithoutFlightCost,
            "تكلفة الطيران": data.flightCost,
            "سعر بيع الباكدج": data.packagePrice,
            المدينة: data.city,
            التاريخ: getCurrentData(),
            الوقت: new Date().toLocaleTimeString(),
            الموظف: data.employee,
            "اسم الوكيل": data.agent,
            "المبلغ الذي تم دفعه": data.theAmountPaid,
            "عربون ام دفع كامل": data.depositOrFullPayment,
            "تاريخ العودة": data.returnDate,
            "تاريخ السفر": data.dateOfTravel,
            "تاريخ الدفع": data.paymentDate,
        };
        await sheet.addRow(formatedData);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
