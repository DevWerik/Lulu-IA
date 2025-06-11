import obterResposta from "../services/openai.service.js";

export const pergutarChat = async (req, res) => {
    const { pergunta } = req.body;

    try {
        if (!pergunta) {
            return res.status(400).json({ error: "Pergunta não pode ser vazia." });
        }

        const resposta = await obterResposta(pergunta);
        res.json({ resposta })

    } catch (err) {
        res.status(500).json({
            erro: "Erro ao processar a pergunta."
        });
    }
}