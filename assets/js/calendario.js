
        const calendarEl = document.getElementById('calendar');
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
                            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        let currentDate = new Date(); // Data atual

        const feriados = [
            // Feriados de 2024
            { dia: 1, mes: 0, nome: "Ano Novo" }, // 1 de janeiro
            { dia: 12, mes: 1, nome: "Carnaval" }, // 12 de fevereiro
            { dia: 29, mes: 2, nome: "Sexta-feira Santa" }, // 29 de março
            { dia: 21, mes: 3, nome: "Tiradentes" }, // 21 de abril
            { dia: 1, mes: 4, nome: "Dia do Trabalho" }, // 1 de maio
            { dia: 8, mes: 5, nome: "Corpus Christi" }, // 8 de junho
            { dia: 7, mes: 8, nome: "Independência do Brasil" }, // 7 de setembro
            { dia: 12, mes: 9, nome: "Nossa Senhora Aparecida" }, // 12 de outubro
            { dia: 2, mes: 10, nome: "Finados" }, // 2 de novembro
            { dia: 15, mes: 10, nome: "Proclamação da República" }, // 15 de novembro
            { dia: 25, mes: 11, nome: "Natal" }, // 25 de dezembro

            // Feriados de 2025
            { dia: 1, mes: 0, nome: "Ano Novo" }, // 1 de janeiro
            { dia: 28, mes: 1, nome: "Carnaval" }, // 28 de fevereiro
            { dia: 18, mes: 3, nome: "Sexta-feira Santa" }, // 18 de abril
            { dia: 21, mes: 3, nome: "Tiradentes" }, // 21 de abril
            { dia: 1, mes: 4, nome: "Dia do Trabalho" }, // 1 de maio
            { dia: 19, mes: 5, nome: "Corpus Christi" }, // 19 de junho
            { dia: 7, mes: 8, nome: "Independência do Brasil" }, // 7 de setembro
            { dia: 12, mes: 9, nome: "Nossa Senhora Aparecida" }, // 12 de outubro
            { dia: 2, mes: 10, nome: "Finados" }, // 2 de novembro
            { dia: 15, mes: 10, nome: "Proclamação da República" }, // 15 de novembro
            { dia: 25, mes: 11, nome: "Natal" } // 25 de dezembro
        ];

        function renderCalendar() {
            // Limpa o conteúdo atual
            calendarEl.innerHTML = '';

            // Cabeçalho do calendário
            const header = document.createElement('div');
            header.className = 'header';
            header.innerHTML = `
                <button id="prev">←</button>
                <div>${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}</div>
                <button id="next">→</button>
            `;
            calendarEl.appendChild(header);

            // Dias da semana
            const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
            const daysRow = document.createElement('div');
            daysRow.className = 'days';
            daysOfWeek.forEach(day => {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'day';
                dayDiv.textContent = day;
                daysRow.appendChild(dayDiv);
            });
            calendarEl.appendChild(daysRow);

            // Obter o primeiro e último dia do mês atual
            const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            
            // Preencher os dias do mês
            const daysContainer = document.createElement('div');
            daysContainer.className = 'days';

            // Obter data de hoje
            const today = new Date();

            // Preencher as células vazias antes do primeiro dia do mês
            for (let i = 0; i < firstDay.getDay(); i++) {
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'day';
                daysContainer.appendChild(emptyDiv);
            }

            // Preencher os dias do mês
            for (let day = 1; day <= lastDay.getDate(); day++) {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'day';
                dayDiv.textContent = day;

                // Verifica se é o dia atual e adiciona a classe 'today'
                if (
                    today.getDate() === day &&
                    today.getMonth() === currentDate.getMonth() &&
                    today.getFullYear() === currentDate.getFullYear()
                ) {
                    dayDiv.classList.add('today');
                }

                // Verifica se é feriado
                feriados.forEach(feriado => {
                    if (feriado.dia === day && feriado.mes === currentDate.getMonth()) {
                        dayDiv.classList.add('feriado'); // Adiciona uma classe para feriados
                        dayDiv.title = feriado.nome; // Define o nome do feriado como título
                    }
                });

                daysContainer.appendChild(dayDiv);
            }

            calendarEl.appendChild(daysContainer);
            
            // Adiciona eventos de navegação
            document.getElementById('prev').onclick = () => {
                currentDate.setMonth(currentDate.getMonth() - 1);
                renderCalendar();
            };
            document.getElementById('next').onclick = () => {
                currentDate.setMonth(currentDate.getMonth() + 1);
                renderCalendar();
            };
        }

        renderCalendar(); // Renderiza o calendário inicialmente

