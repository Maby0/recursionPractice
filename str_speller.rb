def sophie_method(str)
    return "all done!!" if str.nil?
    puts str[0]
    sophie_method(str[0+1..-1])
end

sophie_method("hello")