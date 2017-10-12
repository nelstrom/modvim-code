class Homophoner
  attr_reader :dictionary

  def initialize(homophones)
    @dictionary = Hash.new
    homophones.each do |wordlist|
      wordlist.each do |word|
        @dictionary[word] = (wordlist - [word]).sort
      end
    end
  end

  def lookup(word)
    dictionary.fetch(word, [])
  end

  def to_s
    "<" + self.class.name + ": " + dictionary.to_s + ">"
  end
end
