function updateClock() {
        const agora = new Date();
        
        // Obtém horas, minutos e segundos e formata com zero à esquerda
        const horas = agora.getHours();
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');
        
        // Obtém o dia, mês e ano
        const dia = agora.getDate();
        const mes = String(agora.getMonth() + 1).padStart(2, '0');
        const ano = agora.getFullYear();
        
        // Função para ajustar horas e dias que ultrapassem 24
        function ajustaHoraDia(horas, diaAtual) {
            let novoDia = diaAtual;
            let novaHora = horas;

            if (novaHora >= 24) {
                novaHora -= 24;
                novoDia += 1;
            } else if (novaHora < 0) {
                novaHora += 24;
                novoDia -= 1;
            }

            return {
                horaFormatada: String(novaHora).padStart(2, '0'),
                diaFormatado: String(novoDia).padStart(2, '0')
            };
        }

        // Obtém as horas e dias ajustados para cada fuso horário
        const local = ajustaHoraDia(horas, dia);
        const rs = ajustaHoraDia(horas, dia);
        const ny = ajustaHoraDia(horas - 1, dia);
        const al = ajustaHoraDia(horas + 4, dia);
        const ch = ajustaHoraDia(horas + 11, dia);
        const eg = ajustaHoraDia(horas + 6, dia);
        const jp = ajustaHoraDia(horas + 12, dia);
        const ru = ajustaHoraDia(horas + 11, dia);
        const nz = ajustaHoraDia(horas + 16, dia);

        // Atualiza os elementos com os horários ajustados para cada fuso
        document.getElementById("mensaagem").innerText = `${local.diaFormatado}/${mes}/${ano}      ${local.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensagemRS").innerText = `${rs.diaFormatado}/${mes}/${ano}      ${rs.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensagemMN").innerText = `${ny.diaFormatado}/${mes}/${ano}      ${ny.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensagemNY").innerText = `${ny.diaFormatado}/${mes}/${ano}      ${ny.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensagemAL").innerText = `${al.diaFormatado}/${mes}/${ano}      ${al.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensagemCH").innerText = `${ch.diaFormatado}/${mes}/${ano}      ${ch.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensagemEG").innerText = `${eg.diaFormatado}/${mes}/${ano}      ${eg.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensagemJP").innerText = `${jp.diaFormatado}/${mes}/${ano}      ${jp.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensagemRU").innerText = `${ru.diaFormatado}/${mes}/${ano}      ${ru.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensagemNZ").innerText = `${nz.diaFormatado}/${mes}/${ano}      ${nz.horaFormatada}:${minutos}:${segundos}`;
        document.getElementById("mensaagemCL").innerText = `${local.diaFormatado}/${mes}/${ano}    ${local.horaFormatada}:${minutos}:${segundos}`
    }

    updateClock();
    setInterval(updateClock, 1000);