set undofile
augroup vimrc
  autocmd BufWritePre /tmp/* setlocal noundofile
augroup END
