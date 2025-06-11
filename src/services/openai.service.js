import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})

const obterResposta = async (pergunta) => {

    try {
        const completation = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: `Você é um assistente que responde perguntas com base no seguinte texto institucional:
                "Bem-vindo ao SIM Instituto Social! Somos uma organização da sociedade civil, que trabalha no semiárido do Piauí desde 2013.
                Nossa sede está no município de Capitão Gervásio Oliveira. Atendemos semanalmente 350 pessoas, entre crianças, adolescentes,
                jovens, mulheres e famílias de forma continuada. Venha conhecer nossos projetos, encante-se com o sertão e transforme realidades junto com a gente!"
                Agora, responda de forma clara, objetiva e acolhedora às perguntas do usuário com base nesse texto.`
                },
                {
                    role: "user",
                    content: pergunta
                }
            ],
        })

         return completation.choices[0].message.content

    } catch (error) {
        console.error("Erro ao obter resposta do OpenAI:", error);
        throw new Error("Erro ao obter resposta do OpenAI");
    }
}

export default obterResposta;
