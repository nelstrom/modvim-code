if [ -n "$NVIM_LISTEN_ADDRESS" ]; then
  export PS1="» "
else
  export PS1="\$ "
fi
