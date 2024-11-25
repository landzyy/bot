
import { Client, Events, VCardBuilder  } from "@mengkodingan/ckptw";
import fetch from "node-fetch"
import util from "util"
import axios from "axios"
import mime from "mime-types"
import express from "express"

const app = express()
global.apii = `https://api.ndaadev.us.kg/api/`
const erorr = "Server Sedang Sibuk Coba Lagi Nanti!"

//function

async function randomUA() {
    const UAs = [
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3 WOW64 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4",
        "Mozilla/5.0 (Windows NT 10.0 WOW64 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1 WOW64 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (Windows NT 6.3 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (X11 Ubuntu Linux x86_64 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1 WOW64 Trident/7.0 rv:11.0) like Gecko",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10.12 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_4) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.1 Safari/603.1.30",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0 WOW64 Trident/7.0 rv:11.0) like Gecko",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393",
        "Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10.11 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_11_6) AppleWebKit/603.2.5 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.5",
        "Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/58.0.3029.110 Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0 WOW64 rv:54.0) Gecko/20100101 Firefox/54.0",
        "Mozilla/5.0 (Windows NT 6.1 Trident/7.0 rv:11.0) like Gecko",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063",
        "Mozilla/5.0 (Windows NT 6.1 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (X11 Linux x86_64 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 OPR/45.0.2552.888",
        "Mozilla/5.0 (Windows NT 6.1 Win64 x64 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (X11 Linux x86_64 rv:45.0) Gecko/20100101 Firefox/45.0",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_10_5) AppleWebKit/603.2.5 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.5",
        "Mozilla/5.0 (Windows NT 10.0 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
        "Mozilla/5.0 (iPad CPU OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.0 Mobile/14F89 Safari/602.1",
        "Mozilla/5.0 (Windows NT 6.1 WOW64 rv:52.0) Gecko/20100101 Firefox/52.0",
        "Mozilla/5.0 (Windows NT 6.1 WOW64 rv:54.0) Gecko/20100101 Firefox/54.0",
        "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
        "Mozilla/5.0 (X11 Ubuntu Linux x86_64 rv:54.0) Gecko/20100101 Firefox/54.0",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8",
        "Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36 OPR/45.0.2552.812",
        "Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 5.1 rv:52.0) Gecko/20100101 Firefox/52.0",
        "Mozilla/5.0 (X11 Linux x86_64 rv:52.0) Gecko/20100101 Firefox/52.0",
        "Mozilla/5.0 (Windows NT 6.1 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36",
        "Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10.12 rv:54.0) Gecko/20100101 Firefox/54.0",
        "Mozilla/5.0 (Windows NT 6.1 WOW64 rv:40.0) Gecko/20100101 Firefox/40.1",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10.10 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
        "Mozilla/5.0 (compatible MSIE 9.0 Windows NT 6.0 Trident/5.0 Trident/5.0)",
        "Mozilla/5.0 (Windows NT 6.1 WOW64 rv:45.0) Gecko/20100101 Firefox/45.0",
        "Mozilla/5.0 (compatible MSIE 9.0 Windows NT 6.1 Trident/5.0 Trident/5.0)",
        "Mozilla/5.0 (Windows NT 6.1 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36",
        "Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64 rv:54.0) Gecko/20100101 Firefox/54.0",
        "Mozilla/5.0 (iPad CPU OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
        "Mozilla/5.0 (Windows NT 10.0 WOW64 rv:52.0) Gecko/20100101 Firefox/52.0",
        "Mozilla/5.0 (Windows NT 6.1 WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
        "Mozilla/5.0 (X11 Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36",
        "Mozilla/5.0 (X11 Fedora Linux x86_64 rv:53.0) Gecko/20100101 Firefox/53.0",
        "Mozilla/5.0 (Macintosh Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7",
        "Mozilla/5.0 (Windows NT 10.0 WOW64 Trident/7.0 Touch rv:11.0) like Gecko",
        "Mozilla/5.0 (Windows NT 6.2 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.3 WOW64 Trident/7.0 rv:11.0) like Gecko"
    ]

    return UAs[Math.floor(Math.random() * UAs.length)]
}

async function fetchJson(url, options = {}) {
    let { data } = await axios(url, {
        headers: {
            Accept: "application/json, text/plain, */*",
            Priority: "u=0, i",
            "User-Agent": randomUA(),
            "family": 4,
            ...(options.headers ? options.headers : {})
        },
        responseType: "json",
        timeout: 60 * 1000 * 15, // timeout 15 minutes
        ...(options && delete options.headers && options)
    })

    return data
}

async function getRandomElement(arr) {
    try {
        if (arr.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    } catch (error) {
        console.error(`Error:`, error);
        return null;
    }
}

async function openaii(userid, text, model = "gpt-4o-mini") {
    try {
        const response = await axios.post('https://luminai.my.id/v2', {
            text: text,
            userId: userid,
            model: model
        });

        return response.data.reply.reply;
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        throw new Error("Gagal mendapatkan respons dari AI.");
    }
}

async function luminaii(content) {
    try {
        const response = await axios.post('https://luminai.my.id/', { content });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const bot = new Client({
    prefix: ".",
    printQRInTerminal: false,
    readIncommingMsg: true,
    usePairingCode: true,
    phoneNumber: '62856405754211', // phone number, e.g 62xxxxx
    WAVersion: [2, 3000, 1017531287],
});
bot.ev.once(Events.ClientReady, (m, ctx) => {
    console.log(`ready at ${m.user.id}`)
    bot.core.sendMessage("6285640575421" + "@s.whatsapp.net", {text : "bot online!"})
});
bot.command({
    name: "e",
    code: async (ctx) => {
      try {
        var evaled = await eval(ctx.args.join(" "));
        return ctx.reply({
          text: util.inspect(evaled, { depth: 0 }),
        });
      } catch (err) {
        return ctx.reply({ text: `${err}!` });
      }
    },
  });
  
bot.command("menu", async(ctx) => {
    ctx.reply(`Hello ${ctx._sender.pushName}!

Server : _https://api.ndaadev.us.kg_
Owner : _https://wa.me/6285640575421_

_*General*_
.ping -> Untuk mengecek status bot
.menu -> Untuk menampilkan menu bot

_*AI-ASSISTANT*_
.gemini -> Untuk menggunakan gemini
.openai -> Untuk menggunakan openai
.luminai -> Untuk menggunakan luminai

_*NEWS*_
.news-cnn -> Untuk menampilkan berita CNN
.news-cnbc -> Untuk menampilkan berita CNBC
.news-replubika -> Untuk menampilkan berita Replubika
.news-kumparan -> Untuk menampilkan berita Kumparan

_*OTHER*_
.covid-19 -> Untuk menampilkan data covid-19`)

})
bot.command("ping", async(ctx) => {
    ctx.reply(`Pong!\n_Server : https://api.ndaadev.us.kg_`)

})

//__________NEWS___________
bot.command("news-cnn", async(ctx) => {
    const res = await fetchJson(`${global.apii}news-cnn`)
    ctx.reply(util.format(res.result))
})
bot.command("news-cnbc", async(ctx) => {
    const res = await fetchJson(`${global.apii}news-cnbc`)
    ctx.reply(util.format(res.result))
})
bot.command("news-replubika", async(ctx) => {
    const res = await fetchJson(`${global.apii}news-replubika`)
    ctx.reply(util.format(res.result))
})
bot.command("news-kumparan", async(ctx) => {
    const res = await fetchJson(`${global.apii}news-kumparan`)
    ctx.reply(util.format(res.result))
})

//OTHER
bot.command("covid-19", async(ctx) => {
    const res = await fetchJson(`${global.apii}covid-19`)
    ctx.reply(util.format(res.result))
})

//AI
bot.command("blackbox", async(ctx) => {
    const text = ctx.args.join(" ") || null
    if (text === null) return ctx.reply(`Masukan Pertanyaan`)
    const res = await fetchJson(`${global.apii}blackbox?query=${text}`)
    ctx.reply(`${res.result}`)
})
bot.command("gemini", async(ctx) => {
    const text = ctx.args.join(" ") || null
    if (text === null) return ctx.reply(`Masukan Pertanyaan`)
    const res = await fetchJson(`${global.apii}gemini?query=${text}`)
    ctx.reply(`${res.result}`)
})
bot.command("openai", async(ctx) => {
    try {
        const text = ctx.args.join(" ") || null
        if (text === null) return ctx.reply(`Masukan Pertanyaan`)
        const res = await fetchJson(`${global.apii}openai?query=${text}`)
        ctx.reply(`${res.result}`)
    } catch (error) {
        ctx.reply(`Server ${global.apii} Sibuk`)
    }
})
bot.command("luminai", async(ctx) => {
    try {
        const text = ctx.args.join(" ") || null
        if (text === null) return ctx.reply(`Masukan Pertanyaan`)
        const res = await fetchJson(`${global.apii}lumin-ai?query=${text}`)
        ctx.reply(`${res.result.result}`)
    } catch (error) {
        ctx.reply(`Server ${global.apii} Sibuk`)
    }
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`)
})
bot.launch();