

Repositório criado para praticar os comandos do Git, GitHub e Git Flow.


| Comando | Função |
|---|---|
| git init | Inicializa um repositório |
| git clone URL | Clona um repositório |
| git status | Verifica o estado dos arquivos |
| git add . | Adiciona todas as alterações |
| git add arquivo | Adiciona um arquivo específico |
| git commit -m "mensagem" | Cria um commit |
| git push | Envia os commits ao GitHub |
| git pull | Atualiza o repositório local |
| git fetch | Busca alterações remotas |
| git branch | Lista as branches |
| git branch nome | Cria uma branch |
| git switch nome | Troca de branch |
| git switch -c nome | Cria e acessa uma branch |
| git merge nome | Junta duas branches |
| git branch -d nome | Exclui uma branch local já integrada |
| git log --oneline | Exibe o histórico de commits |
| git diff | Mostra alterações nos arquivos |
| git commit --amend | Corrige o último commit local |
| git revert HASH | Desfaz um commit criando outro |
| git reset --soft HEAD~1 | Desfaz o último commit local mantendo as alterações preparadas |
| git restore arquivo | Descarta alterações não preparadas |
| git restore --staged arquivo | Retira um arquivo da área de preparação |
| git cherry-pick HASH | Aplica um commit específico |
| git stash | Guarda alterações temporariamente |
| git stash pop | Recupera alterações guardadas |
| git push -u origin nome | Publica uma branch |


Git Flow é uma estratégia de organização das branches de um projeto.

- main: versão estável do projeto.
- develop: versão em desenvolvimento.
- feature: criação de novas funcionalidades.
- release: preparação de novas versões.
- hotfix: correção de erros urgentes.


Formulário de cadastro desenvolvido com HTML, CSS e JavaScript.