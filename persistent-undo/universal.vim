set undofile
if !has('nvim')
  set undodir=~/.vim/undo
endif
augroup vimrc
  autocmd BufWritePre /tmp/* setlocal noundofile
augroup END
