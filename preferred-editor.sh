if [ -n "$NVIM_LISTEN_ADDRESS" ]; then
  export VISUAL="nvr -o --remote-wait +'set bufhidden=wipe'"
else
  export VISUAL="nvim"
fi
